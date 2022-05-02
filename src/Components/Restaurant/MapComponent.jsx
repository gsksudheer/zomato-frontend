import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MdOutlineFileCopy, MdOutlineDirections } from 'react-icons/md';

const MapComponent = (props) => {
    const position = props.mapLocation;
  return (
    <>
        <div className="flex flex-col gap-3 p-3">
            <div className="flex flex-col gap-1.5">
                <h4 className="text-lg">Call</h4>
                <h5 className="text-red-500">+91 {props.phno}</h5>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl font-semibold text-gray-600">Direction</h4>
                <div className="w-full h-48">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        <Marker position={position}>
                            <Popup>{props.title}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <p className="text-gray-400 text-md font-thin">{props.address}</p>
                <div className="flex items-center gap-4">
                    <button className="text-gray-600 font-medium border border-gray-400 rounded-lg flex items-center gap-1 py-1 px-3 text-md">
                        <MdOutlineFileCopy />copy
                    </button>
                    <button className="border border-gray-400 rounded-lg flex items-center gap-1 py-1 px-3">
                        <span className="text-red-700 text-xl"><MdOutlineDirections /></span>
                        Direction
                    </button>
                </div>
            </div>

        </div>
    </>
  )
}
/*
<div>
            <div>
                <h4 className="text-lg">Call</h4>
                <h5 className="text-zred-400">{props.phno}</h5>
            </div>
            <div className="flex flex-col gap-3">
                <h4 className="text-xl pt-4">Direction</h4>
                <div className="w-full">
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={props.mapLocation}>
                          <Popup>
                            {props}
                          </Popup>
                        </Marker>
                    </MapContainer>   
                </div>
                <p>
                 {props.address}
                </p>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-gray-700 border border-gray-400 px-3 py-2 rounded-lg ">
                          <MdContentCopy />
                          copy
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border-2 border-gray-400 rounded-md">
                        <span className="text-zred-500">
                        <FaDirections />
                        </span>
                        Direction
                    </button>
                </div>
            </div> 
        </div>
*/
export default MapComponent;