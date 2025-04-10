import { useEffect, useRef, useState } from 'react';

/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/

function Clock() {
  const now = new Date();

  const intervalRef = useRef(null);

  const [time, setTime] = useState({
    hour: String(now.getHours()).padStart(2, '0'),
    minute: String(now.getMinutes()).padStart(2, '0'),
    second: String(now.getSeconds()).padStart(2, '0'),
  });

  const updateTimer = () => {
    const newNow = new Date();
    const nowHour = String(newNow.getHours()).padStart(2, '0');
    const nowMinute = String(newNow.getMinutes()).padStart(2, '0');
    const nowSecond = String(newNow.getSeconds()).padStart(2, '0');

    setTime({
      ...time,
      hour: nowHour,
      minute: nowMinute,
      second: nowSecond,
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  const th = [...time.hour, '시', ...time.minute, '분', ...time.second, '초'];
  console.log(intervalRef);

  return (
    <>
      <div className="timecContainer flex">
        {th.map((item, id) => (
          <span key={id}>{item}</span>
        ))}
      </div>

      <div>
        <button onClick={clearInterval(intervalRef.current)} className="timerStop">
          타이머 정지
        </button>
      </div>
    </>

    // <div className="timer-container">{`${time.hour}시 ${time.minute}분 ${time.second}초`}</div>
  );
}

export default Clock;
