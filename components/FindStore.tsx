"use client";

import { useState } from "react";
import { Search, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const storeData = [
  {
    id: 1,
    name: "Downtown Flagship Store",
    address: "123 Main Street, Downtown",
    city: "New York",
    state: "NY",
    zip: "10001",
    phone: "(212) 555-1234",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
    distance: "0.8",
    mapUrl: "https://maps.google.com/?q=40.7128,-74.006",
  },
  {
    id: 2,
    name: "Midtown Store",
    address: "456 Fifth Avenue",
    city: "New York",
    state: "NY",
    zip: "10018",
    phone: "(212) 555-5678",
    hours: "Mon-Sat: 9AM-10PM, Sun: 10AM-8PM",
    distance: "1.2",
    mapUrl: "https://maps.google.com/?q=40.7549,-73.9840",
  },
  {
    id: 3,
    name: "Brooklyn Store",
    address: "789 Atlantic Avenue",
    city: "Brooklyn",
    state: "NY",
    zip: "11217",
    phone: "(718) 555-9012",
    hours: "Mon-Sat: 10AM-8PM, Sun: 11AM-6PM",
    distance: "3.5",
    mapUrl: "https://maps.google.com/?q=40.6782,-73.9442",
  },
];

const StoreFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStore, setSelectedStore] = useState(storeData[0]);
  const filteredStores = storeData.filter((store) => {
    return (
      searchQuery === "" ||
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.zip.includes(searchQuery)
    );
  });

  const mapSrc = `https://maps.google.com/maps?q=${selectedStore.city},${selectedStore.state}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Find a Store</h1>

      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search by city, state, or zip code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            {filteredStores.length} stores found
          </p>

          {filteredStores.length > 0 ? (
            <div className="space-y-4">
              {filteredStores.map((store) => (
                <div
                  key={store.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors hover:bg-muted/30 
                    ${selectedStore.id === store.id ? "border-primary" : "border-border"}`}
                  onClick={() => setSelectedStore(store)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">{store.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {store.distance} mi
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {store.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {store.city}, {store.state} {store.zip}
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 mt-0.5 text-muted-foreground" />
                      <span className="text-sm">{store.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 text-muted-foreground" />
                      <span className="text-sm">{store.hours}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(store.mapUrl, "_blank");
                      }}
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 border rounded-lg">
              <p className="text-muted-foreground">
                No stores found matching your criteria.
              </p>
              <p className="text-muted-foreground">
                Try adjusting your search query.
              </p>
            </div>
          )}
        </div>

        <div className="w-full md:w-2/3 h-[500px] border rounded-lg overflow-hidden">
          <div className="relative w-full h-full">
            <iframe
              src={mapSrc}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location Map"
            ></iframe>

            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <h3 className="font-bold text-sm">{selectedStore.name}</h3>
              <p className="text-xs text-muted-foreground">
                {selectedStore.address}
              </p>
              <p className="text-xs text-muted-foreground">
                {selectedStore.city}, {selectedStore.state} {selectedStore.zip}
              </p>
              <div className="flex items-center gap-1 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-7 flex items-center gap-1"
                  onClick={() => window.open(selectedStore.mapUrl, "_blank")}
                >
                  <ExternalLink className="w-3 h-3" />
                  View in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreFinder;
