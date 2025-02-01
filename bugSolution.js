```javascript
import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const myRef = useRef(null);
  const controller = useRef(null);

  useEffect(() => {
    controller.current = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch('some-api-endpoint', {
          signal: controller.current.signal,
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    return () => {
      // Clean up: Abort the fetch request if the component is unmounted
      controller.current?.abort();
    };
  }, []);

  if (!data) return <Text>Loading...</Text>;

  return (
    <View>
      {/* ... use data ... */}
    </View>
  );
};

export default MyComponent;
```