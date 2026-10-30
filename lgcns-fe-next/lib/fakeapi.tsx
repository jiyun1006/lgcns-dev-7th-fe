// lib/fakeApi.ts
const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export async function getPost(id: string) {
  await wait(1000); // 1초
  return { id, title: `${id}번 게시글`, content: "async/await 실습 중입니다." };
}

export async function getAuthor(id: string) {
  await wait(1000); // 1초
  return { name: "지윤" };
}

export async function getComments(id: string) {
  await wait(3000); // 3초 (일부러 제일 느리게)
  return [
    { id: 1, text: "잘 봤어요" },
    { id: 2, text: "Suspense 신기하네요" },
  ];
}
