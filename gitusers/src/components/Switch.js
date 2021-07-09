import React from 'react'

export default function Switch({classes, isDark}) {
    return (
      <div className={`${classes}`}>
        <div class="switch-container">
          <input className="sw" type="checkbox" id="switch" />
          <div class="switch-color"></div>

          <label className="swt" for="switch"></label>
        </div>
      </div>
    );
}
