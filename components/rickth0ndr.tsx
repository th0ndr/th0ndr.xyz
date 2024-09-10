'use client'

import React from 'react'

const headerText = [
  "hello, im rickth0ndr, i like making cool sh*t. music, experiments & web3 stuff. "
];

const contactText = [
  "contact me:",
  "bustos@vibing.studio",
  "⚡"
];

const projects = [
  {
    title: "vibing studios: creative studio",
    description: <small> 2021-present. co-founder of <a href="https://vibing.studio/" className="text-blue-500 underline">vibing studios</a>, we made <a href="https://vibeknights.io/" className="text-blue-500 underline">vibe knights</a>, <a href="https://x.com/rickth0ndr/status/1609728362574118912" className="text-blue-500 underline">bonk sam website</a> & kiwii pocket.</small>
  },
  {
    title: "power of gratitude",
    description: <small> 2024-present. we provide food and essential goods to those <a href="https://x.com/rickth0ndr/status/1803516159729324057" className="text-blue-500 underline">who need it most</a>, as an act of gratitude for life. </small>
  },
  {
    title: "ixtlan project",
    description: <small> coming 2025. unleash your full potential.</small>
  },
];

const socials = [
  {
    name: "x",
    redirect: "https://twitter.com/rickth0ndr"
  },
  {
    name: "tiktok",
    description: <small></small>,
    redirect: "https://www.tiktok.com/@rickth0ndr"
  },
  {
    name: "github",
    description: <small></small>,
    redirect: "https://github.com/th0ndr"
  },
  {
    name: "linkedin",
    redirect: "https://www.linkedin.com/in/th0ndr"
  },
  {
    name: "instagram",
    redirect: "https://www.instagram.com/rickth0ndr"
  }
];

export function RickWebsite() {
  return (
    <div className="bg-black text-blue-500 font-mono p-8 min-h-screen text-xs leading-5">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Menlo&display=swap');
        body { font-family: 'Menlo', monospace; margin: 0; padding: 0; }
        .bg-black { padding-left: 0; }
        .justify-text { text-align: justify; }
        p, li { color: white; }
      `}</style>
      
      <h1 className="text-white font-bold">
        {headerText.map((text, index) => (
          <React.Fragment key={index}>
            {text}
            {index < headerText.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h1>
      
      <p>{contactText[0]}</p>
      <a href="mailto:me@jai.vin" className="text-blue-500 underline block">{contactText[1]}</a>
      <a href="#" className="text-blue-500 underline block">{contactText[2]}</a>
      
      <h2 className="text-blue-500 mt-8">checkout my cool projects</h2>
      <ul className="list-none pl-0">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <li className="text-blue-500">{project.title}</li>
            <li className="justify-text">{project.description}</li>
          </React.Fragment>
        ))}
      </ul>  
      
      <h2 className="text-blue-500 mt-8">follow my socials</h2>
      <ul className="list-none pl-0">
        {socials.map((social, index) => (
          <React.Fragment key={index}>
            <li><a href={social.redirect} className="text-blue-500 underline">{social.name}</a></li>
            {social.description && <li className="justify-text">{social.description}</li>}
          </React.Fragment>
        ))}
      </ul>
      
      <footer className="mt-8">© rickth0ndr ⚡️ 1996-2024</footer>
    </div>
  )
}