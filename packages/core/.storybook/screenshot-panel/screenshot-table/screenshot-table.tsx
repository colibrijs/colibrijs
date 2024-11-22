import { type API } from '@storybook/manager-api';
import classNames from 'classnames';
import React, { useCallback, type ReactNode, type ChangeEvent } from 'react';

import styles from './screenshot-table.module.css';
import { isApprovedScreenshot } from '../../screenshoter-config/get-approved-screenshots';

import type { StoryData } from '../types';

type Props = {
  storiesToApprove: StoryData[];
  approvedStories: StoryData[];
  stories: StoryData[];
  api: API;
  onChange: (storiesToApprove: StoryData[]) => void;
};

export function ScreenshotTable({
  storiesToApprove,
  stories,
  api,
  onChange,
  approvedStories,
}: Props): ReactNode {
  const onClick = React.useCallback(
    (screenshotStory: StoryData) => () => api.selectStory(screenshotStory.path, screenshotStory.id),
    [api]
  );

  const removeStoryToApprove = useCallback(
    (story: StoryData) => {
      const index = storiesToApprove.findIndex(
        (currentStory) => story.path === currentStory.path && story.name === currentStory.name
      );

      const cloneArray = [...storiesToApprove];
      cloneArray.splice(index, 1);
      onChange(cloneArray);
    },
    [onChange, storiesToApprove]
  );

  const addStoryToApprove = useCallback(
    (story: StoryData) => {
      const newStories = [...storiesToApprove, story];
      onChange(newStories);
    },
    [onChange, storiesToApprove]
  );

  const onCheck = useCallback(
    (story: StoryData) => {
      return (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        if (!isChecked) {
          removeStoryToApprove(story);
        } else {
          addStoryToApprove(story);
        }
      };
    },
    [addStoryToApprove, removeStoryToApprove]
  );

  return (
    <table className={styles.panel}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th} />
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Path</th>
        </tr>
      </thead>
      <tbody>
        {stories.map((story) => (
          <tr
            key={story.path}
            className={classNames(styles.tr, {
              [styles.approved!]: isApprovedScreenshot(approvedStories, story),
            })}
          >
            <td className={styles.td}>
              <input
                disabled={isApprovedScreenshot(approvedStories, story)}
                className={styles.checkbox}
                onChange={onCheck(story)}
                type="checkbox"
              />
            </td>
            <td className={styles.td}>{story.name}</td>
            <td className={styles.td}>
              <button className={styles.button} onClick={onClick(story)}>
                {story.path}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
