import { FC } from "react";
import Box from "./components/Box";

const App: FC = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center gap-20">
      <Box name="바나나 박스" bgColor="bg-yellow-500" isRounded={false} />
      <Box name="딸기 박스" bgColor="bg-red-500" isRounded={true} />
      <Box name="메론 박스" bgColor="bg-green-500" isRounded={false} />
      <Box name="오렌지 박스" bgColor="bg-orange-500" />
      <Box name="포도 박스" bgColor="bg-purple-500" />
    </div>
  );
};

export default App;
