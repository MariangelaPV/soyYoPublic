import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

const QrCodeGr = (word) => {
  const [qrCode, setQrCode] = useState("");
  useEffect(() => {
    QRCode.toDataURL("http://localhost:3001/#/u/" + word).then((data) => {
      setQrCode(data);
    });
  }, [word]);
  return (qrCode);
}

export default QrCodeGr;