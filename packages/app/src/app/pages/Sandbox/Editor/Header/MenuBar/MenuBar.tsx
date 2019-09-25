import './titlebar.css';

import { useOvermind } from 'app/overmind';
import React, { useEffect, useRef } from 'react';

export const MenuBar = () => {
  const { effects } = useOvermind();
  const menuBarEl = useRef(null);

  useEffect(() => {
    // Get the menu bar part from vscode and mount it
    effects.vscode.createMenubar(menuBarEl.current);
  }, [effects.vscode]);

  return (
    // Explicitly use inline styles here to override the vscode styles
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: ' 0.5rem',
      }}
      className="part titlebar"
    >
      <div
        style={{
          alignItems: 'center',
          height: 38,
          fontSize: '0.875rem',
        }}
        className="menubar"
        ref={menuBarEl}
      />
    </div>
  );
};
