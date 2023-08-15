// components/DynamicComponent.js
import { useState, useEffect } from "react";

const DynamicComponent = () => {
  const [renderedOnClient, setRenderedOnClient] = useState(false);

  useEffect(() => {
    setRenderedOnClient(true);
  }, []);

  return (
    <div>
      {renderedOnClient ? (
        <p>This was rendered on the client</p>
      ) : (
        <p>This was server-rendered but expected to be client-rendered</p>
      )}
    </div>
  );
};

export default DynamicComponent;
