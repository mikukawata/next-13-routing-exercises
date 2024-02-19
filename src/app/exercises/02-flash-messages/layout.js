import React from 'react';

import './styles.css';
import ToastProvider, { ToastContext } from '../../../components/ToastProvider';
import ToastShelf from '../../../components/ToastShelf/ToastShelf';

function FlashMsgLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ToastProvider>
          {children}
          <ToastShelf />
        </ToastProvider>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
