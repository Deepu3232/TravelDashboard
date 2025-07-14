import { useEffect, useState } from 'react';

const NetworkStatus = () => {
  const [status, setStatus] = useState({
    online: navigator.onLine,
    connection: navigator.connection?.effectiveType || 'unknown',
  });

  useEffect(() => {
    const updateStatus = () => {
      setStatus({
        online: navigator.onLine,
        connection: navigator.connection?.effectiveType || 'unknown',
      });
    };

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    navigator.connection?.addEventListener('change', updateStatus);

    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
      navigator.connection?.removeEventListener('change', updateStatus);
    };
  }, []);

  return (
    <div className='netDiv'>
      <h3>Network Details</h3>
      {
        console.log(status)
      }
      <p>Network: {status.online ? 'Online' : 'Offline'}</p>
      <p>Connection Type: {status.connection}</p>
    </div>
  );
};

export default NetworkStatus;
