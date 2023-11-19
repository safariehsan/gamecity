import placeholder from "../assets/placeholder.svg";

const getCroppedImg = (url: string, width: number, height: number) => {
  if (!url) return placeholder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const croppedUrl =
    url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
  return croppedUrl;
};
export default getCroppedImg;
