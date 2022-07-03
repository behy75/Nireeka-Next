import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../../StaticPages/Footer";
import Header from "../../StaticPages/Header";
import styles from "./main.module.css";

export default function ConfiguratorMain({ configurator }) {
  return (
    <>
      {/* <Header /> */}
      <div className="">
        <div className="text-center py-8 leading-10">
          <h2 className="text center font-light font-dosis text-gray-600 text-4xl py-1">
            {`Build your own customized Nireeka ebike`}
          </h2>
          <div>
            <h3 className="inline text center font-light text-black font-dosis text-2xl">{`Not sure which to pick? `}</h3>
            <Link href="/">
              <a className="inline text center font-light text-gray-500 hover:text-customColorNIR transition ease-in font-dosis text-2xl">{`Compare Here`}</a>
            </Link>
          </div>
        </div>
        <div className={`${styles.row}`}>
          {configurator.data.items.map((item) => {
            return (
              <div className={styles.cart} key={item.id}>
                <Link href={`/configurator/${item.slug}`} passHref>
                  <a>
                    <div className={styles.box}>
                      <Image
                        src="https://nireeka.com/storage/variation/b8nqh9GQqtnQgWyJlopTDNkNjgWktmM3HIuSxdwH.jpg"
                        alt={item.title}
                        width={900}
                        height={450}
                        layout="responsive"
                        objectFit="cover"
                        className=" rounded-l-lg"
                      />
                    </div>

                    <div className="mx-auto leading-8 ">
                      <div className="text-center">
                        <p className="inline font-light text-xl ">
                          {item.title}
                        </p>
                        <p className="inline text-gray-500 font-light text-xl">
                          {` ${item.variation}`}
                        </p>
                      </div>
                      {/* <p>{item.slug}</p> */}
                      <div
                        className="text-gray-500 text-center font-dosis font-light text-xl"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                      <div className="text-center pt-1.5 ">
                        <p className="inline font-light text-xl">{`From `}</p>
                        <p className="inline font-light text-xl text-green-500">
                          {` ${item.price}`}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
