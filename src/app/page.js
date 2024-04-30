import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen p-12 justify-around">
      <div className="left-box max-h-screen h-full w-auto text-lg px-24 content-between">
        <div className="title">
          <a className="text-2xl font-bold">스크린샷 메이커</a>
        </div>
        <div className="description h-fit">
          <h2 className="text-4xl font-bold my-6">앱스토어 스크린샷 만들기</h2>
          <p className="">개발화면 스크린샷 업로드하면</p>
          <p className="mb-4">앱스토어, 플레이스토어 각각 업로드할 수 있게 추출해드려요 :)</p>
          <div className="upload-box h-60 w-full border-dashed content-center text-center border-black border-2 rounded-2xl my-8 flex-col">
            <span className="text-neutral-400">스크린샷 업로드...</span>
          </div>
          <button className="upload-button w-full rounded-full py-4 bg-black text-white text-xl font-bold">업로드</button>
        </div>
      </div>

      <div className="h-full w-wrap items-center content-center px-8">
        <Image
        alt="sample-image"
        className="h-full w-auto object-contain"
        src='/sample.png'
          width={1200}
          height={1200}
        ></Image>
      </div>
    </main>
  );
}
