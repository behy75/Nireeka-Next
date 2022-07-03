import Image from "next/image";
import FAQ from "../../public/images/faq.png";

function Attributes({
  attribute,
  title,
  property,
  icon,
  price,
  srcImg,
  textColor,
  bgColor,
}) {
  return (
    <ul className="sm:mx-4 divide-y divide-gray-200">
      <li className="relative py-2 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
            <Image
              src={srcImg}
              className="rounded-xl"
              layout="fill"
              alt={attribute}
            />
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-light">
            <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <div className={`hover:text-white flex justify-start`}>
                <span className="absolute inset-0" />
                {title}
                {/* <img src={FAQ} alt="faq" className="w-4 h-4 ml-2" /> */}
              </div>
            </span>
          </h3>
          <p className="flex justify-start text-xs sm:text-xs lg:text-sm text-gray-500">
            {property}
          </p>
        </div>
        <div className="">
          <p className="inline-flex items-center py-0.5 text-bold font-light">
            {price}
          </p>
        </div>
      </li>
    </ul>
  );
}

export default function ButtonAttributes({
  attribute,
  title,
  property,
  price,
  bgColor,
  textColor,
  srcImg,
}) {
  return (
    <button
      type="button"
      className={`w-80 inline-flex items-center px-5 py-2 mx-2 my-4 border border-gray-600 text-base font-light rounded-2xl shadow-sm ${textColor} ${bgColor} hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-700`}
    >
      <Attributes
        attribute={attribute}
        title={title}
        property={property}
        price={price}
        srcImg={srcImg}
        textColor={textColor}
        bgColor={bgColor}
      />
    </button>
  );
}
