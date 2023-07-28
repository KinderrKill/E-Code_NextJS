'use client';

import { useEffect, useRef } from 'react';

import './_console.scss';

import TypingWriter from '../tools/typingWriter';
import { APP_VERSION, userOnMobile } from '../utils/constants';

export default function Console() {
  const consoleFrameRef = useRef<HTMLDivElement>(null);

  const typingWriterRef = useRef<HTMLParagraphElement>(null);
  let writer: TypingWriter | null = null;

  useEffect(() => {
    if (userOnMobile()) return;

    const panel = consoleFrameRef.current;
    if (!panel) return;

    window.onmousemove = (e) => {
      rotatePanel(e, panel);
    };

    function rotatePanel(event: MouseEvent, element: HTMLDivElement) {
      const x = event.clientX;
      const y = event.clientY;

      const middleX = window.innerWidth / 3;
      const middleY = window.innerHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 20;
      const offsetY = ((y - middleY) / middleY) * 20;

      element.style.setProperty('--rotateX', offsetX + 'deg');
      element.style.setProperty('--rotateY', -1 * offsetY + 'deg');
    }
  }, [consoleFrameRef]);

  // useEffect for TypingWriter initialization
  useEffect(() => {
    if (!typingWriterRef.current) return;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (!writer) writer = new TypingWriter(typingWriterRef.current);

    if (writer.isActive() || writer.isFinished()) return;

    writer
      .type('/start welcome.txt ')
      .pauseFor(1000)
      .clear()
      .type('Bonjour et bienvenue sur mon site internet !')
      .pauseFor(700)
      .type('\nIci, vous pouvez retrouver mes travaux et compétences.')
      .pauseFor(500)
      .type('\nIl est ammené à évoluer dans les prochains jours.')
      .pauseFor(300)
      .deleteChar(20)
      .type('la semaine prochaine...')
      .pauseFor(500)
      .deleteChar(23, 20)
      .type("'when it's ready' !")
      .pauseFor(500)
      .type('\n\n')
      .pauseFor(2000)
      .start(true);
  }, [typingWriterRef]);

  return (
    <>
      <div className={userOnMobile() ? 'movile-console-command' : 'console-command'} ref={consoleFrameRef}>
        <div className='brand'>
          <div className='brand__dot'>
            <span className='brand__dot dot-red'></span>
            <span className='brand__dot dot-orange'></span>
            <span className='brand__dot dot-green'></span>
          </div>
        </div>
        <div className='content'>
          <span className='text-shadow'>E-Code - Version {APP_VERSION}</span>
          <p className='text-shadow'>&copy; {new Date().getFullYear()} Étienne S. Tout droits réservés</p>
          <div ref={typingWriterRef} id='typing-writer' className='text-gray-300 mt-5 whitespace-pre-wrap'></div>
        </div>
      </div>
    </>
  );
}
