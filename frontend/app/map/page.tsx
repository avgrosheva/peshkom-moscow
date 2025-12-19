"use client";
 
import { useContext, useEffect, useMemo, useState } from "react";
import {
  Map as YMap,
  Placemark,
  Polyline,
  GeolocationControl,
  ZoomControl,
} from "@iminside/react-yandex-maps";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PointsContext } from "@/context/PointsContext";
import { places } from "@/data/places";
import { IPlace } from "@/lib/types";
 
const MOSCOW_CENTER: [number, number] = [55.751244, 37.618423];
 
function distanceKm(a: [number, number], b: [number, number]): number {
  const [lat1, lon1] = a;
  const [lat2, lon2] = b;
  const R = 6371;
 
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
 
  const la1 = (lat1 * Math.PI) / 180;
  const la2 = (lat2 * Math.PI) / 180;
 
  const sinDLat = Math.sin(dLat / 2);
  const sinDLon = Math.sin(dLon / 2);
 
  const aVal =
    sinDLat * sinDLat +
    sinDLon * sinDLon * Math.cos(la1) * Math.cos(la2);
 
  const c = 2 * Math.atan2(Math.sqrt(aVal), Math.sqrt(1 - aVal));
 
  return R * c;
}
 
function getRoutePlaces(points: IPlace[]): IPlace[] {
  if (points && points.length > 1) {
    return points;
  }
  return places.slice(0, 4);
}
 
export default function MapPage() {
  const router = useRouter();
  const { points } = useContext(PointsContext);
 
  const routePlaces = useMemo(
    () => getRoutePlaces(points),
    [points]
  );
 
  const routeCoords = useMemo(
    () =>
      routePlaces.map(
        (place) =>
          [place.coordinates.lat, place.coordinates.lng] as [number, number]
      ),
    [routePlaces]
  );
 
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    setCurrentIndex(0);
  }, [routePlaces]);
 
  const { totalDistanceKm, totalTimeMinutes } = useMemo(() => {
    if (routeCoords.length < 2) {
      return { totalDistanceKm: 0, totalTimeMinutes: 0 };
    }
 
    let dist = 0;
    for (let i = 0; i < routeCoords.length - 1; i++) {
      dist += distanceKm(routeCoords[i], routeCoords[i + 1]);
    }
 
    const timeMinutes = (dist / 4.5) * 60;
    return { totalDistanceKm: dist, totalTimeMinutes: timeMinutes };
  }, [routeCoords]);
 
  const mapCenter =
    routeCoords.length > 0 ? routeCoords[0] : MOSCOW_CENTER;
 
  const currentPlace =
    routePlaces.length > 0 ? routePlaces[currentIndex] : null;
  const nextPlace =
    routePlaces.length > currentIndex + 1
      ? routePlaces[currentIndex + 1]
      : null;
 
  const canGoNext = currentIndex < routePlaces.length - 1;
 
  return (
    <div className="w-full h-[100dvh] flex flex-col">
      {/* КАРТА + кнопка «назад» */}
      <div className="flex-1 relative">
        <YMap
          defaultState={{
            center: mapCenter,
            zoom: 12,
          }}
          width="100%"
          height="100%"
        >
          <GeolocationControl />
          <ZoomControl />
 
          {routeCoords.map((coord, index) => (
            <Placemark
              key={index}
              geometry={coord}
              options={{
                preset:
                  index === currentIndex
                    ? "islands#redIcon"
                    : "islands#blueIcon",
              }}
            />
          ))}
 
          {routeCoords.length > 1 && (
            <Polyline
              geometry={routeCoords}
              options={{
                strokeColor: "#FF8C00",
                strokeWidth: 4,
                strokeOpacity: 0.9,
              }}
            />
          )}
        </YMap>
 
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 z-20 rounded-full bg-white/90 shadow p-2 flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-800" />
        </button>
      </div>
 
      {/* ПАНЕЛЬ МАРШРУТА */}
      <div className="bg-white/95 backdrop-blur-md p-4 border-t border-neutral-200 max-h-[40dvh] overflow-y-auto">
        <div className="flex justify-between items-center mb-3">
          <div>
            <div className="text-xs uppercase text-neutral-500">
              Маршрут
            </div>
            <div className="font-semibold text-sm">
              {routePlaces.length} точек
            </div>
          </div>
          {routePlaces.length > 1 && (
            <div className="text-right text-xs text-neutral-600">
              <div>~ {totalDistanceKm.toFixed(1)} км пешком</div>
              <div>~ {Math.round(totalTimeMinutes)} мин</div>
            </div>
          )}
        </div>
 
        {currentPlace && (
          <div className="mb-3">
            <div className="text-xs text-neutral-500 mb-1">
              Текущая точка
            </div>
            <div className="font-medium">
              {currentIndex + 1}. {currentPlace.name}
            </div>
            {nextPlace && (
              <div className="text-xs text-neutral-600 mt-1">
                Далее: {currentIndex + 2}. {nextPlace.name}
              </div>
            )}
          </div>
        )}
 
        {routePlaces.length > 1 && (
          <button
            className={`w-full mt-1 py-2 rounded-xl text-sm font-medium ${
              canGoNext
                ? "bg-pale-orange text-white"
                : "bg-neutral-200 text-neutral-500"
            }`}
            disabled={!canGoNext}
            onClick={() => {
              if (canGoNext) {
                setCurrentIndex((prev) => prev + 1);
              }
            }}
          >
            {canGoNext ? "Следующая точка" : "Маршрут завершён"}
          </button>
        )}
 
        <div className="mt-3">
          <div className="text-xs text-neutral-500 mb-1">
            Все точки маршрута
          </div>
          <ul className="flex flex-col gap-1 text-sm">
            {routePlaces.map((place, index) => (
              <li
                key={place._id ?? index}
                className={`flex items-start gap-2 rounded-lg px-2 py-1 ${
                  index === currentIndex
                    ? "bg-orange-50 border border-pale-orange"
                    : "bg-transparent"
                }`}
              >
                <span className="text-xs text-neutral-500 mt-0.5">
                  {index + 1}.
                </span>
                <div>
                  <div className="font-medium">{place.name}</div>
                  {place.address && (
                    <div className="text-[11px] text-neutral-500">
                      {place.address}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};