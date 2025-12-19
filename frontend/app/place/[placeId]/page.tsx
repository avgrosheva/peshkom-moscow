"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import { places } from "@/data/places";
import { IPlace } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";

export default function PlacePage() {
  const { placeId } = useParams();
  const router = useRouter();

  const place: IPlace | undefined = places.find(
    (p) => p._id === placeId
  );

  if (!place) {
    return null;
  }

  return (
    <div className="w-full h-full bg-light-white pb-24">
      {/* Кнопка назад */}
      <div className="p-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-600"
        >
          <ArrowLeft size={18} />
          Назад
        </button>
      </div>

      {/* Изображение */}
      <div className="w-full h-[35vh] overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Контент */}
      <div className="p-5 flex flex-col gap-4">
        {/* Название */}
        <h1 className="text-2xl font-bold text-gray-900">
          {place.name}
        </h1>

        {/* Адрес */}
        <div className="flex items-center gap-2 text-gray-500">
          <MapPin size={18} />
          <span>{place.address}</span>
        </div>

        {/* Теги */}
        <div className="flex flex-wrap gap-2">
          {place.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-neutral-200 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Описание */}
        <p className="text-gray-700 leading-relaxed">
          {place.description}
        </p>

        {/* Рейтинг */}
        <div className="text-sm text-gray-500">
          Рейтинг: {place.rating}
        </div>

        {/* Кнопка на карту */}
        <Button
          style={{
            background: "radial-gradient(#FD4B27 33%, #FE9F5D 75%)",
          }}
          onClick={() => {
            router.push("/map");
          }}
        >
          Показать на карте
        </Button>

        {/* Ссылка на главную */}
        <Link
          href="/"
          className="text-center text-sm text-gray-500 underline"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
