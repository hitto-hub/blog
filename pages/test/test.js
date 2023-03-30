import React from "react"


export default function Home() {
  const subtitle = "サブタイトルーーー"

  return (
    <div className="hero">
      {/* <h1 class="title">Hello Next.js</h1> */}
      <h1 className="title">Hello Next.js</h1>
      {/* <h1 style="color:red; font-size:48px;">hello</h1> */}
      <h1 style={{ color: "red", fontSize: "48px" }}>hello</h1>
      <hr />
      <p>{subtitle}</p>
    </div>
  );
}
