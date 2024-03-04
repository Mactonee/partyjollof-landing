/* eslint-disable react/react-in-jsx-scope */
import { type Metadata } from 'next'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'

import { Content } from './content'
import { cinema, streaming } from '../../data/content'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

export const metadata: Metadata = {
  title: 'Party Jollof',
  description: 'Latest Movies, TV Shows and Cast and Crew accross Africa'
}

export default function ReelsPage() {
  return (
    <div className="grid lg:grid-cols-4">
      <div className="col-span-3 lg:col-span-4">
        <div className="h-full w-full px-4 py-6 lg:px-8">
          <Tabs defaultValue="music" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="music" className="relative">
                  Movies
                </TabsTrigger>
                <TabsTrigger value="podcasts" disabled>TV Shows</TabsTrigger>
                <TabsTrigger value="live" disabled>
                  People
                </TabsTrigger>
              </TabsList>

            </div>
            <TabsContent
              value="music"
              className="border-none p-0 outline-none"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl text-white font-semibold tracking-tight">
                    Streaming
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    New and upcoming movies on streaming platforms
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <Carousel
                opts={{
                  align: "start",
                  loop: true
                }}
                className="w-full"
              >
                <CarouselContent className='-ml-2 md:-ml-4'>
                  {streaming.map((album) => (
                    <CarouselItem key={album.name} className="md:basis-1/6 lg:basis-1/6">
                      <Content
                        album={album}
                        className="w-[200px]"
                        aspectRatio="portrait"
                        width={200}
                        height={250}
                      />
                    </CarouselItem>
                  ))}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>



              <div className="mt-6 space-y-1">
                <h2 className="text-2xl text-white font-semibold tracking-tight">
                  Cinema
                </h2>
                <p className="text-sm text-muted-foreground">
                  New and upcoming movies in Cinema
                </p>
              </div>
              <Separator className="my-4" />
              <Carousel
                opts={{
                  align: "start",
                  loop: true
                }}
                className="w-full"
              >
                <CarouselContent className='-ml-2 md:-ml-4'>
                  {cinema.map((album) => (
                    <CarouselItem key={album.name} className="md:basis-1/6 lg:basis-1/6">

                      <Content

                        album={album}
                        className="w-[200px]"
                        aspectRatio="portrait"
                        width={200}
                        height={250}
                      />
                    </CarouselItem>
                  ))}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
