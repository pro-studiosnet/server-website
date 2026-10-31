function copyIP() {
  const ip = "play.prostudios.2bd.net";
  const button = document.getElementById("copyBtn");

  navigator.clipboard.writeText(ip).then(() => {
    button.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m5 12 4 4L19 6"/>
      </svg>
      copied
    `;

    setTimeout(() => {
      button.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="7" rx="2"/>
          <rect x="3" y="14" width="18" height="7" rx="2"/>
          <path d="M7 7.5h.01M7 17.5h.01M11 7.5h6M11 17.5h6"/>
        </svg>
        copy ip
      `;
    }, 1500);
  }).catch(() => {
    button.textContent = "copy failed sonion";
  });
}

document.getElementById("copyBtn").addEventListener("click", copyIP);
