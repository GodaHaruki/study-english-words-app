export const StudyType = {
  J2E: 'j2e',
  E2J: 'e2j',
  Dict: 'dict',
} as const;

export const studyTypeProps: Record<
  keyof typeof StudyType,
  {
    title: string;
    desc: string;
  }
> = {
  E2J: { title: '英語を日本語に', desc: '英単語の意味を回答する問題です' },
  J2E: { title: '日本語を英語に', desc: '日本語の意味を回答する問題です' },
  Dict: { title: '単語帳', desc: '訳や例文などが載っている単語帳です' },
} as const;
