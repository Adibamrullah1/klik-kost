// components/DatePickerModal.tsx
'use client';

import { Dialog } from '@headlessui/react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useAppContext } from '@/context/SearchContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DatePickerModal({ isOpen, onClose }: Props) {
  const { checkinDate, setCheckinDate } = useAppContext();

  const handleDateSelect = (date: Date | undefined) => {
    setCheckinDate(date);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="rounded-lg bg-white p-2">
          <DayPicker
            mode="single"
            selected={checkinDate}
            onSelect={handleDateSelect}
            fromDate={new Date()} // Pengguna tidak bisa memilih tanggal kemarin
          />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}