import React, { useState } from "react";

function IsLoading() {
  return <p>Loading...</p>;
}

function Content() {
  return (
    <p>
      I'm a Software Engineer, and UI/UX designer, who currently works as the
      lead designer at DotCircle Solutions. I'm passionate about getting and
      sharing knowledge, documentation, web engineering, Jamstack, and others. I
      build useful open-source projects, and I also create aesthetically user
      interfaces Behance...
    </p>
  );
}

export function App() {
  const [Loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return Loading ? <IsLoading /> : <Content />;
}

