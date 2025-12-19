"use client";
 
import { useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PointsContext } from "@/context/PointsContext";
import { IPlace } from "@/lib/types";
 
interface PlaceTinderProps {
  setStep: (step: number) => void;
  initialPlaces: IPlace[];
}
 
export default function PlaceTinder({
  setStep,
  initialPlaces,
}: PlaceTinderProps) {
  const router = useRouter();
  const { setPoints } = useContext(PointsContext);
 
  // работаем ТОЛЬКО с тем, что пришло с главной
  const placesToUse = useMemo(
    () => (initialPlaces && initialPlaces.length > 0 ? initialPlaces : []),
    [initialPlaces]
  );
 
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<IPlace[]>([]);
 
  const current = placesToUse[index];
  const isFinished = index >= placesToUse.length;
 
  const handleSkip = () => {
    setIndex((prev) => prev + 1);
  };
 
  const handleLike = () => {
    if (current) {
      setSelected((prev) => [...prev, current]);
    }
    setIndex((prev) => prev + 1);
  };
 
  const handleFinish = () => {
    const finalPlaces = selected.length > 0 ? selected : placesToUse;
 
    if (finalPlaces.length > 0) {
      setPoints(finalPlaces);   // кидаем точки в контекст
      router.push("/map");      // идём на карту
    } else {
      setStep(0);               // вообще ничего не выбрали → назад к категориям
    }
  };
 
  // если по выбранным тегам мест нет вообще
  if (!placesToUse || placesToUse.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-5">
        <p className="text-sm text-neutral-600 text-center">
          По выбранным категориям пока нет мест.
        </p>
        <button
          className="px-4 py-2 rounded-xl bg-pale-orange text-white text-sm font-medium"
          onClick={() => setStep(0)}
        >
          Выбрать другие категории
        </button>
      </div>
    );
  }
 
  // все посмотрели → предлагаем построить маршрут
  if (isFinished) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-5">
        <p className="text-sm text-neutral-700 text-center">
          Маршрут готов: {selected.length || placesToUse.length} мест.
        </p>
        <button
          className="px-4 py-2 rounded-xl bg-pale-orange text-white text-sm font-medium"
          onClick={handleFinish}
        >
          Показать маршрут на карте
        </button>
        <button
          className="px-3 py-2 text-xs text-neutral-500 underline"
          onClick={() => setStep(0)}
        >
          Выбрать категории заново
        </button>
      </div>
    );
  }
 
  // основной экран выбора
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-5 pb-28">
      <div className="w-full flex justify-between text-xs text-neutral-500 mb-3">
        <span>Выбрано: {selected.length}</span>
        <span>
          {index + 1} / {placesToUse.length}
        </span>
      </div>
 
      <div className="w-full flex-1 flex items-center justify-center">
        {current && (
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
            <div className="h-52 w-full relative">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h2 className="font-semibold text-lg">{current.name}</h2>
              {current.address && (
                <p className="text-xs text-neutral-500">{current.address}</p>
              )}
              {current.description && (
                <p className="text-sm text-neutral-700 line-clamp-3">
                  {current.description}
                </p>
              )}
              {current.tags && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full bg-orange-50 text-[10px] text-pale-orange"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
 
      <div className="w-full flex gap-3 mt-4">
        <button
          className="flex-1 py-3 rounded-2xl bg-neutral-200 text-neutral-700 text-sm font-medium"
          onClick={handleSkip}
        >
          Пропустить
        </button>
        <button
          className="flex-1 py-3 rounded-2xl bg-pale-orange text-white text-sm font-medium"
          onClick={handleLike}
        >
          В маршрут
        </button>
      </div>
 
      {/* Кнопка “Готово” внизу, чтобы можно было закончить раньше */}
      <button
        className="mt-4 w-full py-2 rounded-xl border border-pale-orange text-pale-orange text-xs font-medium"
        onClick={handleFinish}
      >
        Закончить выбор и построить маршрут
      </button>
    </div>
  );
}