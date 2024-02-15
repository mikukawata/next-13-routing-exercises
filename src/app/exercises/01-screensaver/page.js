import React from 'react';

import ScreenSaver from '../../../components/ScreenSaver';
import Link from 'next/link';

function ScreenSaverIndexPage() {
  return (
    <main>
      <h3>Choose your color:</h3>
      <ul>
        <li>
          <Link href='/exercises/01-screensaver/indigo'>indigo</Link>
        </li>
        <li>
          <a href='/exercises/01-screensaver/palevioletred'>palevioletred</a>
        </li>
        <li>
          <a href='/exercises/01-screensaver/maroon'>maroon</a>
        </li>
        <li>
          <a href='/exercises/01-screensaver/darkblue'>darkblue</a>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
