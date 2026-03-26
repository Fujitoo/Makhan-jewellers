import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS } from '@/lib/constants';
import { instagramPosts } from '@/lib/mockData';

export const SocialMediaSection = () => {
  return (
    <div className="bg-slate-900 text-white py-12 px-4 text-center">
      <h2 className="font-serif text-2xl font-bold mb-2">
        Follow Us on Instagram
      </h2>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold-600 text-lg hover:text-gold-400 transition mb-6 inline-block"
      >
        @makhanjewellers_1994
      </a>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-8">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover group-hover:opacity-80 transition"
            />
            <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="border-white text-white hover:bg-white hover:text-slate-900"
        asChild
      >
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
          Follow on Instagram
        </a>
      </Button>
    </div>
  );
};
