"use client"

import { useState } from "react"
import {
  Search,
  HelpCircle,
  Bell,
  Package,
  Settings,
  Grid,
  Info,
  Play,
  MoreVertical,
  Trash2,
  Pause,
  Terminal,
  RefreshCw,
  Layers,
  ImageIcon,
  HardDrive,
  PenToolIcon as Tool,
  Box,
  Compass,
  PuzzleIcon as PuzzlePiece,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function DockerDesktop() {
  const [showRunningOnly, setShowRunningOnly] = useState(true)

  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-white">
      {/* Header */}
      <header className="bg-[#0f1e45] h-12 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V8.774a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v2.119c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.342a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v2.119c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.059a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v2.119c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.059a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v2.119c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.059a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v2.119c0 .102.084.186.186.186m2.965 2.716h2.118a.186.186 0 00.185-.185V8.774a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.186v2.119c0 .102.082.185.185.185m-2.965 0h2.12a.185.185 0 00.184-.185V8.774a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.187.186v2.119c0 .102.085.185.186.185m5.893 2.715h2.12a.185.185 0 00.184-.186v-2.119a.185.185 0 00-.184-.185h-2.12a.185.185 0 00-.184.185v2.119a.185.185 0 00.184.186m-2.928 0h2.12a.185.185 0 00.184-.186v-2.119a.185.185 0 00-.184-.185h-2.12a.185.185 0 00-.184.185v2.119a.185.185 0 00.184.186m11.866-8.001c0-.186-.093-.35-.232-.449a.591.591 0 00-.249-.126 1.06 1.06 0 00-.156-.013h-1.809a.52.52 0 00-.52.52v1.394h2.466zm-12.36 5.286h2.12a.185.185 0 00.184-.186V8.774a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v2.119a.185.185 0 00.184.185" />
            </svg>
            <span className="font-semibold">docker.desktop</span>
          </div>
          <span className="text-xs bg-[#1a2c5b] px-2 py-0.5 rounded ml-2">PERSONAL</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#1a2c5b] rounded pl-8 pr-3 py-1 w-64 text-sm focus:outline-none"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2a3c6b] px-1 rounded text-xs">
              ⌘K
            </div>
          </div>
          <HelpCircle className="w-5 h-5" />
          <div className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              5
            </span>
          </div>
          <Package className="w-5 h-5" />
          <Settings className="w-5 h-5" />
          <Grid className="w-5 h-5" />
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="font-semibold">T</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-[#0d1117] border-r border-[#30363d]">
          <div className="p-2">
            <div className="flex items-center gap-2 p-2 rounded bg-[#161b22] mb-4">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14ZM10.59 5.59L8 8.17L5.41 5.59L4 7L8 11L12 7L10.59 5.59Z"
                    fill="#8B949E"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium">Ask Gordon</div>
              <div className="text-xs bg-blue-600 px-1 rounded ml-auto">BETA</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 p-2 rounded bg-[#161b22] text-white">
                <Box className="w-4 h-4" />
                <span className="text-sm">Containers</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-[#161b22] text-gray-400">
                <ImageIcon className="w-4 h-4" />
                <span className="text-sm">Images</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-[#161b22] text-gray-400">
                <HardDrive className="w-4 h-4" />
                <span className="text-sm">Volumes</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-[#161b22] text-gray-400">
                <Tool className="w-4 h-4" />
                <span className="text-sm">Builds</span>
              </div>
            </div>

            <div className="my-4 border-t border-[#30363d]"></div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 p-2 rounded hover:bg-[#161b22] text-gray-400">
                <Compass className="w-4 h-4" />
                <span className="text-sm">Docker Hub</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-[#161b22] text-gray-400">
                <Compass className="w-4 h-4" />
                <span className="text-sm">Docker Scout</span>
              </div>
            </div>

            <div className="my-4 border-t border-[#30363d]"></div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 p-2 rounded hover:bg-[#161b22] text-gray-400">
                <PuzzlePiece className="w-4 h-4" />
                <span className="text-sm">Extensions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="flex items-center mb-1">
              <h1 className="text-2xl font-semibold">Containers</h1>
              <button className="ml-2 text-blue-400 text-sm flex items-center gap-1">
                Give feedback <Info className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center mb-6">
              <p className="text-gray-400 text-sm">View all your running containers and applications.</p>
              <a href="#" className="ml-1 text-blue-400 text-sm flex items-center">
                Learn more{" "}
                <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M15 3H21V9" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 14L21 3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-[#161b22] rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    Container CPU usage <Info className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-[#00b09b] text-xl font-semibold">
                  1.94% / 1000% <span className="text-xs text-gray-400">(10 CPUs available)</span>
                </div>
              </div>
              <div className="bg-[#161b22] rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    Container memory usage <Info className="w-4 h-4" />
                  </div>
                  <button className="text-blue-400 text-sm">Show charts</button>
                </div>
                <div className="text-[#00b09b] text-xl font-semibold">265.7MB / 7.47GB</div>
              </div>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#161b22] border border-[#30363d] rounded pl-10 pr-3 py-2 w-full text-sm focus:outline-none"
                />
              </div>
              <button className="bg-[#161b22] border border-[#30363d] p-2 rounded">
                <Layers className="w-5 h-5 text-blue-400" />
              </button>
              <div className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-5 rounded-full relative transition-colors duration-200 ease-in-out",
                    showRunningOnly ? "bg-blue-600" : "bg-[#30363d]",
                  )}
                >
                  <div
                    className={cn(
                      "absolute w-4 h-4 rounded-full bg-white top-0.5 transition-transform duration-200 ease-in-out",
                      showRunningOnly ? "translate-x-5" : "translate-x-0.5",
                    )}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-400">Only show running containers</span>
              </div>
            </div>

            <div className="bg-[#161b22] rounded-md border border-[#30363d] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="p-3 text-left w-8">
                      <input type="checkbox" className="rounded bg-[#0d1117] border-[#30363d]" />
                    </th>
                    <th className="p-3 text-left w-8"></th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Container ID</th>
                    <th className="p-3 text-left">Image</th>
                    <th className="p-3 text-left">Port(s)</th>
                    <th className="p-3 text-left">CPU (%)</th>
                    <th className="p-3 text-left">Last started</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#30363d]">
                    <td className="p-3">
                      <input type="checkbox" className="rounded bg-[#0d1117] border-[#30363d]" />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">tender_satoshi</td>
                    <td className="p-3">796c4d835fbc</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        devcontainers/python
                      </a>
                    </td>
                    <td className="p-3"></td>
                    <td className="p-3">0%</td>
                    <td className="p-3">8 days ago</td>
                    <td className="p-3 flex items-center gap-2">
                      <button className="text-blue-400">
                        <Play className="w-4 h-4" />
                      </button>
                      <button>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-[#30363d]">
                    <td className="p-3">
                      <input type="checkbox" className="rounded bg-[#0d1117] border-[#30363d]" />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">act-Autograding-Test</td>
                    <td className="p-3">2638056f6b12</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        catthehacker/ubuntu
                      </a>
                    </td>
                    <td className="p-3"></td>
                    <td className="p-3">0%</td>
                    <td className="p-3">1 month ago</td>
                    <td className="p-3 flex items-center gap-2">
                      <button className="text-blue-400">
                        <Play className="w-4 h-4" />
                      </button>
                      <button>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-[#30363d] bg-[#1c2128]">
                    <td className="p-3">
                      <input type="checkbox" className="rounded bg-[#0d1117] border-[#30363d]" />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-[#00b09b]"></div>
                    </td>
                    <td className="p-3">mongodb7</td>
                    <td className="p-3">631624e5fbae</td>
                    <td className="p-3 flex items-center gap-1">
                      <a href="#" className="text-blue-400">
                        mongo:7.0.9
                      </a>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 3H21V9"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 14L21 3"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400 flex items-center gap-1">
                        27017:27017
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 3H21V9"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 14L21 3"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </td>
                    <td className="p-3">1.94%</td>
                    <td className="p-3">16 hours ago</td>
                    <td className="p-3 flex items-center gap-2">
                      <button className="bg-blue-500 p-1 rounded">
                        <Pause className="w-3 h-3 text-white" />
                      </button>
                      <button>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-[#30363d]">
                    <td className="p-3">
                      <input type="checkbox" className="rounded bg-[#0d1117] border-[#30363d]" />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">redis-stack</td>
                    <td className="p-3">f5878074068</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        redis/redis-stack:latest
                      </a>
                    </td>
                    <td className="p-3">
                      <div>6379:6379</div>
                      <div className="text-xs text-blue-400">Show all ports (2)</div>
                    </td>
                    <td className="p-3">0%</td>
                    <td className="p-3">10 months ago</td>
                    <td className="p-3 flex items-center gap-2">
                      <button className="text-blue-400">
                        <Play className="w-4 h-4" />
                      </button>
                      <button>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-[#30363d]">
                    <td className="p-3">
                      <input type="checkbox" className="rounded bg-[#0d1117] border-[#30363d]" />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">mysql</td>
                    <td className="p-3">9b707dc32fb3</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        mysql:8.1
                      </a>
                    </td>
                    <td className="p-3">3306:3306</td>
                    <td className="p-3">0%</td>
                    <td className="p-3">2 years ago</td>
                    <td className="p-3 flex items-center gap-2">
                      <button className="text-blue-400">
                        <Play className="w-4 h-4" />
                      </button>
                      <button>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-[#30363d]">
                    <td className="p-3">
                      <input type="checkbox" className="rounded bg-[#0d1117] border-[#30363d]" />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">mongodb6</td>
                    <td className="p-3">e6d154293120</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        mongo:6.0.9
                      </a>
                    </td>
                    <td className="p-3">27017:27017</td>
                    <td className="p-3">0%</td>
                    <td className="p-3">8 days ago</td>
                    <td className="p-3 flex items-center gap-2">
                      <button className="text-blue-400">
                        <Play className="w-4 h-4" />
                      </button>
                      <button>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <input type="checkbox" className="rounded bg-[#0d1117] border-[#30363d]" />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">mariadb</td>
                    <td className="p-3">b35a2589446b</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        mariadb
                      </a>
                    </td>
                    <td className="p-3">3306:3306</td>
                    <td className="p-3">0%</td>
                    <td className="p-3">2 years ago</td>
                    <td className="p-3 flex items-center gap-2">
                      <button className="text-blue-400">
                        <Play className="w-4 h-4" />
                      </button>
                      <button>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-2 text-right text-sm text-gray-400">Showing 7 items</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0d1117] border-t border-[#30363d] h-8 flex items-center px-4 justify-between text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Engine running</span>
          </div>
          <div className="mx-2">|</div>
          <span>RAM 5.80 GB</span>
          <div className="mx-2">|</div>
          <span>CPU 0.10%</span>
          <div className="mx-2">|</div>
          <span>Disk: 30.28 GB used (limit 58.37 GB)</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1">
            <Terminal className="w-4 h-4" />
            Terminal
          </button>
          <button className="flex items-center gap-1 text-orange-400">
            <RefreshCw className="w-4 h-4" />
            Restart to update
          </button>
        </div>
      </footer>
    </div>
  )
}
