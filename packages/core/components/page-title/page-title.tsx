import type { IPage } from '@colibrijs/types';
import { Flex, Typography } from 'antd';
import React from 'react';

import { PageRemove } from '../page-remove';

export interface Props {
  page: IPage;
}

export function PageTitle({ page }: Props) {
  return (
    <Flex align="baseline" justify="space-between" data-testid="page-title">
      <Typography.Title level={1} data-testid="page-title__name">
        {page.name}
      </Typography.Title>
      <Typography.Text type="secondary" data-testid="page-title__route">
        {page.route}
      </Typography.Text>
      <PageRemove page={page} />
    </Flex>
  );
}