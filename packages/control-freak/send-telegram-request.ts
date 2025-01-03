import type { TelegramAuhOptions } from './types';

export async function sendTelegramRequest(
  message: string,
  authOptions: TelegramAuhOptions
): Promise<void> {
  const url = `https://api.telegram.org/bot${authOptions.telegramBotToken}/sendMessage`;
  const params = new URLSearchParams({
    chat_id: authOptions.telegramChatId,
    text: message,
    parse_mode: 'Markdown',
  });
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });
    const body = await response.json();
    if (!body.ok) {
      throw new Error(body.description);
    }
  } catch (error) {
    throw new Error(`При отправке сообщения в телеграм, возникла ошибка ${String(error)}`);
  }
}
