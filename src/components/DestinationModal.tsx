// components/DestinationModal.tsx
'use client';

import { Dialog } from '@headlessui/react';
import { useAppContext } from '@/context/SearchContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const cities = ['Gresik, Jawa Timur', 'Surabaya, Jawa Timur', 'Malang, Jawa Timur', 'Sidoarjo, Jawa Timur'];

export default function DestinationModal({ isOpen, onClose }: Props) {
  const { setDestination } = useAppContext();

  const handleSelectCity = (city: string) => {
    setDestination(city);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded-lg bg-white p-6">
          <Dialog.Title className="text-xl font-bold">Pilih Destinasi</Dialog.Title>
          <div className="mt-4 space-y-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleSelectCity(city)}
                className="block w-full rounded-md p-3 text-left hover:bg-gray-100"
              >
                {city}
              </button>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}