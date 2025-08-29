import React, { useEffect, useState } from "react";
import bedroom from "../assets/bedroom.jpg";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import washroom from "../assets/washroom.jpg";
import bathroom from "../assets/bathroom.jpg";

function About() {
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center m-10 ">
        {/* Heading of About page */}

        <h1 className="text-2xl font-bold ">
          <span className="bg-amber-400 p-2">Lorem ipsum </span>
          <span className="bg-red-600 p-2 text-gray-50">dolor sit amet.</span>
        </h1>
        <p className="font-semibold m-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          praesentium hic doloribus modi animi asperiores, sunt ex tenetur fugit
          nemo vero iure vel eius, alias sequi. Aliquam sint voluptate tempora,
          excepturi quae expedita possimus dolor odio, repellat libero unde
          illum sequi, delectus magnam quos aperiam! Iusto deleniti pariatur,
          dolorum iure ea fugiat veniam beatae ad porro sapiente cumque ipsa
          architecto unde vel necessitatibus assumenda consequuntur ratione
          laboriosam vero eveniet est voluptatibus ullam! Eaque nisi ea aliquid
          voluptatibus debitis corrupti molestias. Nemo, rem commodi quibusdam
          id repellendus aliquid atque consequuntur quia quae porro nihil
          accusamus placeat laborum, exercitationem, optio dolorum mollitia?
        </p>
        {/* Bedroom image and their description */}
        <div className="m-10 flex items-start gap-10">
          <img
            src={bedroom}
            className="w-[300px] float-left rounded-2xl hover:scale-110 transition duration-300 shadow"
            alt="bedroom"
          />

          <p className="text-justify p-5 font-medium bg-blue-50 rounded-2xl shadow hover:scale-101 transition duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            consectetur sit error qui illum ducimus odit laboriosam praesentium,
            ullam doloremque quaerat expedita, sapiente molestias ipsam
            voluptate corporis soluta veritatis unde enim aut. Dolor consequatur
            deleniti reiciendis maiores nulla nobis corporis assumenda ducimus
            ullam harum? Mollitia dolorem ea deserunt officiis tenetur veniam
            repellendus unde voluptas placeat dolores, voluptates quis tempora
            cupiditate alias nesciunt molestiae optio itaque? Voluptates
            excepturi velit accusamus, perspiciatis eius inventore
            exercitationem, ipsa omnis ipsam, aut natus doloremque voluptatibus
            hic vero voluptatem dolores eaque rerum quis. Delectus doloribus
            nulla sint pariatur? Nulla repudiandae magnam ducimus cumque,
            voluptatibus optio eligendi.
          </p>
        </div>
        {/* first image and their description */}
        <div className="m-10 flex items-start gap-10">
          <p className="text-justify p-5 font-medium float-left bg-blue-50 rounded-2xl shadow hover:scale-101 transition duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            consectetur sit error qui illum ducimus odit laboriosam praesentium,
            ullam doloremque quaerat expedita, sapiente molestias ipsam
            voluptate corporis soluta veritatis unde enim aut. Dolor consequatur
            deleniti reiciendis maiores nulla nobis corporis assumenda ducimus
            ullam harum? Mollitia dolorem ea deserunt officiis tenetur veniam
            repellendus unde voluptas placeat dolores, voluptates quis tempora
            cupiditate alias nesciunt molestiae optio itaque? Voluptates
            excepturi velit accusamus, perspiciatis eius inventore
            exercitationem, ipsa omnis ipsam, aut natus doloremque voluptatibus
            hic vero voluptatem dolores eaque rerum quis. Delectus doloribus
            nulla sint pariatur? Nulla repudiandae magnam ducimus cumque,
            voluptatibus optio eligendi.
          </p>
          <img
            src={first}
            className="w-[300px]  rounded-2xl hover:scale-110 transition duration-300 shadow"
            alt="bedroom"
          />
        </div>
        {/* second image and their description */}
        <div className="m-10 flex items-start gap-10">
          <img
            src={second}
            className="w-[300px] float-left rounded-2xl hover:scale-110 transition duration-300 shadow"
            alt="bedroom"
          />
          <p className="text-justify p-5 font-medium bg-blue-50 rounded-2xl shadow hover:scale-101 transition duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            consectetur sit error qui illum ducimus odit laboriosam praesentium,
            ullam doloremque quaerat expedita, sapiente molestias ipsam
            voluptate corporis soluta veritatis unde enim aut. Dolor consequatur
            deleniti reiciendis maiores nulla nobis corporis assumenda ducimus
            ullam harum? Mollitia dolorem ea deserunt officiis tenetur veniam
            repellendus unde voluptas placeat dolores, voluptates quis tempora
            cupiditate alias nesciunt molestiae optio itaque? Voluptates
            excepturi velit accusamus, perspiciatis eius inventore
            exercitationem, ipsa omnis ipsam, aut natus doloremque voluptatibus
            hic vero voluptatem dolores eaque rerum quis. Delectus doloribus
            nulla sint pariatur? Nulla repudiandae magnam ducimus cumque,
            voluptatibus optio eligendi.
          </p>
        </div>
        {/* third image and their description */}
        <div className="m-10 flex items-start gap-10 ">
          <p className="text-justify p-5 font-medium float-left bg-blue-50 rounded-2xl shadow hover:scale-101 transition duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            consectetur sit error qui illum ducimus odit laboriosam praesentium,
            ullam doloremque quaerat expedita, sapiente molestias ipsam
            voluptate corporis soluta veritatis unde enim aut. Dolor consequatur
            deleniti reiciendis maiores nulla nobis corporis assumenda ducimus
            ullam harum? Mollitia dolorem ea deserunt officiis tenetur veniam
            repellendus unde voluptas placeat dolores, voluptates quis tempora
            cupiditate alias nesciunt molestiae optio itaque? Voluptates
            excepturi velit accusamus, perspiciatis eius inventore
            exercitationem, ipsa omnis ipsam, aut natus doloremque voluptatibus
            hic vero voluptatem dolores eaque rerum quis. Delectus doloribus
            nulla sint pariatur? Nulla repudiandae magnam ducimus cumque,
            voluptatibus optio eligendi.
          </p>
          <img
            src={third}
            className="w-[300px] float-left rounded-2xl hover:scale-110 transition duration-300 shadow"
            alt="bedroom"
          />
        </div>
        {/* washroom image and their description */}
        <div className="m-10 flex items-start gap-10">
          <img
            src={washroom}
            className="w-[300px] float-left rounded-2xl hover:scale-110 transition duration-300 shadow"
            alt="bedroom"
          />
          <p className="text-justify p-5 font-medium bg-blue-50 rounded-2xl shadow hover:scale-101 transition duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            consectetur sit error qui illum ducimus odit laboriosam praesentium,
            ullam doloremque quaerat expedita, sapiente molestias ipsam
            voluptate corporis soluta veritatis unde enim aut. Dolor consequatur
            deleniti reiciendis maiores nulla nobis corporis assumenda ducimus
            ullam harum? Mollitia dolorem ea deserunt officiis tenetur veniam
            repellendus unde voluptas placeat dolores, voluptates quis tempora
            cupiditate alias nesciunt molestiae optio itaque? Voluptates
            excepturi velit accusamus, perspiciatis eius inventore
            exercitationem, ipsa omnis ipsam, aut natus doloremque voluptatibus
            hic vero voluptatem dolores eaque rerum quis. Delectus doloribus
            nulla sint pariatur? Nulla repudiandae magnam ducimus cumque,
            voluptatibus optio eligendi.
          </p>
        </div>
        {/* bathroom image and their description */}
        <div className="m-10 flex items-start gap-10">
          <p className="text-justify p-5 font-medium float-left bg-blue-50 rounded-2xl shadow hover:scale-101 transition duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            consectetur sit error qui illum ducimus odit laboriosam praesentium,
            ullam doloremque quaerat expedita, sapiente molestias ipsam
            voluptate corporis soluta veritatis unde enim aut. Dolor consequatur
            deleniti reiciendis maiores nulla nobis corporis assumenda ducimus
            ullam harum? Mollitia dolorem ea deserunt officiis tenetur veniam
            repellendus unde voluptas placeat dolores, voluptates quis tempora
            cupiditate alias nesciunt molestiae optio itaque? Voluptates
            excepturi velit accusamus, perspiciatis eius inventore
            exercitationem, ipsa omnis ipsam, aut natus doloremque voluptatibus
            hic vero voluptatem dolores eaque rerum quis. Delectus doloribus
            nulla sint pariatur? Nulla repudiandae magnam ducimus cumque,
            voluptatibus optio eligendi.
          </p>
          <img
            src={bathroom}
            className="w-[300px] float-left rounded-2xl hover:scale-110 transition duration-300 shadow"
            alt="bedroom"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
