import { BUSINESS_HOURS } from '@/lib/constants';

export const BusinessHours = () => {
  return (
    <div className="bg-slate-50 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-xl h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&q=80&w=800"
            alt="Makhan Jewellers Store Interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
            Opening Hours
          </h2>
          <div className="space-y-2">
            {BUSINESS_HOURS.map((slot, idx) => (
              <div
                key={idx}
                className="flex justify-between py-3 border-b border-gray-200"
              >
                <span className="font-medium text-slate-900">{slot.days}</span>
                <span
                  className={
                    slot.isClosed ? 'text-red-500 font-medium' : 'text-gray-600'
                  }
                >
                  {slot.time}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 italic">
            * Hours may vary on festivals and holidays
          </p>
        </div>
      </div>
    </div>
  );
};
