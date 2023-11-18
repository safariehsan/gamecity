import useData from "./useData";

interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => useData<IPlatform>("/platforms/lists/parents");

export default usePlatform;
