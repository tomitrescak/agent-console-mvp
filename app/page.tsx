"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Bell,
  Bot,
  BotMessageSquare,
  ChevronDown,
  Computer,
  Cpu,
  ExternalLink,
  Grid,
  HardDrive,
  HelpCircle,
  Info,
  Layers,
  Map,
  MoreVertical,
  Package,
  Pause,
  Play,
  PuzzleIcon as PuzzlePiece,
  RefreshCw,
  Search,
  Settings,
  Terminal,
  PenToolIcon as Tool,
  Trash2,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";

function RunInfo({ runs }: { runs: number }) {
  return (
    <Popover modal={false}>
      <PopoverTrigger className="flex items-center gap-1 curor-pointer">
        {runs} runs <ExternalLink className="w-4 h-4" />
      </PopoverTrigger>
      <PopoverContent className="w-[500px]">
        <div className="p-2">
          <h3 className="text-lg font-semibold">Run Details</h3>
          <p className="text-sm text-gray-400">
            This agent has run {runs} times in the last 30 days.
          </p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold">Recent Runs</h4>
            <table className="mt-2 w-full text-sm text-left text-gray-400">
              <thead>
                <tr>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Duration</th>
                  <th className="py-2 px-4">Input Tokens</th>
                  <th className="py-2 px-4">Output Tokens</th>
                  <th className="py-2 px-4">Cost</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="py-2 px-4">
                      {new Date(
                        Date.now() - Math.random() * 1000000000
                      ).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4">
                      {Math.floor(Math.random() * 10 + 1)}s
                    </td>
                    <td className="py-2 px-4">
                      {Math.floor(Math.random() * 1000 * runs)}
                    </td>
                    <td className="py-2 px-4">
                      {Math.floor(Math.random() * 500 * runs)}
                    </td>
                    <td className="py-2 px-4">
                      ${(Math.random() * 10 * runs).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-4 border-t border-gray-700">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            View all runs
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function DockerDesktop() {
  const [showRunningOnly, setShowRunningOnly] = useState(true);

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
            <Bot />
            <span className="font-semibold">AgentConsole.ai</span>
          </div>
          <span className="text-xs bg-[#1a2c5b] px-2 py-0.5 rounded ml-2">
            ENTERPRISE
          </span>
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
                <BotMessageSquare />
              </div>
              <div className="text-sm font-medium">Conversations</div>
              <div className="text-xs bg-blue-600 px-1 rounded ml-auto">
                BETA
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 p-2 rounded bg-[#161b22] text-white">
                <Cpu className="w-4 h-4" />
                <span className="text-sm">Runners</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-[#161b22] text-white">
                <Bot className="w-4 h-4" />
                <span className="text-sm">Instances</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-[#161b22] text-gray-400">
                <Map className="w-4 h-4" />
                <span className="text-sm">Blueprints</span>
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
                <Computer className="w-4 h-4" />
                <span className="text-sm">Agent Hub</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-[#161b22] text-gray-400">
                <WandSparkles className="w-4 h-4" />
                <span className="text-sm">Agent Designer</span>
              </div>
            </div>

            <div className="my-4 border-t border-[#30363d]"></div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 p-2 rounded hover:bg-[#161b22] text-gray-400">
                <PuzzlePiece className="w-4 h-4" />
                <span className="text-sm">MCP Servers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="flex items-center mb-1">
              <h1 className="text-2xl font-semibold">Agent Instances</h1>
              <button className="ml-2 text-blue-400 text-sm flex items-center gap-1">
                Give feedback <Info className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center mb-6">
              <p className="text-gray-400 text-sm">
                View all your running containers and applications.
              </p>
              <a
                href="#"
                className="ml-1 text-blue-400 text-sm flex items-center"
              >
                Learn more{" "}
                <svg
                  className="w-4 h-4 ml-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
            </div>

            <div className="mb-4 flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Runner (enterprise-1) <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    enterprise-1 (231.213.12.21)
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    enterprise-2 (231.213.12.23)
                  </DropdownMenuItem>
                  <DropdownMenuItem>local-1 (127.0.0.1)</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>All Runners</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
                    showRunningOnly ? "bg-blue-600" : "bg-[#30363d]"
                  )}
                >
                  <div
                    className={cn(
                      "absolute w-4 h-4 rounded-full bg-white top-0.5 transition-transform duration-200 ease-in-out",
                      showRunningOnly ? "translate-x-5" : "translate-x-0.5"
                    )}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-400">
                  Only show running agents
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-[#161b22] rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    Agent Token usage <Info className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-[#00b09b] text-xl font-semibold">
                  2,123,234{" "}
                  <span className="text-xs text-gray-400">
                    tokens used this month
                  </span>
                </div>
              </div>
              <div className="bg-[#161b22] rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    Agent CPU usage <Info className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-[#00b09b] text-xl font-semibold">
                  1.94% / 1000%{" "}
                  <span className="text-xs text-gray-400">
                    (10 CPUs available)
                  </span>
                </div>
              </div>
              <div className="bg-[#161b22] rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    Agent memory usage <Info className="w-4 h-4" />
                  </div>
                  <button className="text-blue-400 text-sm">Show charts</button>
                </div>
                <div className="text-[#00b09b] text-xl font-semibold">
                  265.7MB / 7.47GB
                </div>
              </div>
            </div>

            <div className="bg-[#161b22] rounded-md border border-[#30363d] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="p-3 text-left w-8">
                      <input
                        type="checkbox"
                        className="rounded bg-[#0d1117] border-[#30363d]"
                      />
                    </th>
                    <th className="p-3 text-left w-8"></th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Agent ID</th>
                    <th className="p-3 text-left">Source</th>
                    <th className="p-3 text-left">Runs</th>
                    <th className="p-3 text-left">CPU (%)</th>
                    <th className="p-3 text-left">Last started</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#30363d]">
                    <td className="p-3">
                      <input
                        type="checkbox"
                        className="rounded bg-[#0d1117] border-[#30363d]"
                      />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">gpt-image-generator</td>
                    <td className="p-3">796c4d835fbc</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        n8n/gpt-img-gen
                      </a>
                    </td>
                    <td className="p-3">
                      <RunInfo runs={22} />
                    </td>
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
                      <input
                        type="checkbox"
                        className="rounded bg-[#0d1117] border-[#30363d]"
                      />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">market-analysis</td>
                    <td className="p-3">2638056f6b12</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        zapier/market-analysis
                      </a>
                    </td>
                    <td className="p-3">
                      <RunInfo runs={5} />
                    </td>
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
                      <input
                        type="checkbox"
                        className="rounded bg-[#0d1117] border-[#30363d]"
                      />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-[#00b09b]"></div>
                    </td>
                    <td className="p-3">article-generator</td>
                    <td className="p-3">631624e5fbae</td>
                    <td className="p-3 ">
                      <a
                        href="#"
                        className="text-blue-400 flex items-center gap-1"
                      >
                        beam/article-gen:7.0.9
                        <ExternalLink className="w-4 h-4 " />
                      </a>
                    </td>
                    <td className="p-3">
                      <RunInfo runs={157} />
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
                      <input
                        type="checkbox"
                        className="rounded bg-[#0d1117] border-[#30363d]"
                      />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">sort-history</td>
                    <td className="p-3">f5878074068</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        kpmg/sort-history:latest
                      </a>
                    </td>
                    <td className="p-3">
                      <RunInfo runs={2} />
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
                      <input
                        type="checkbox"
                        className="rounded bg-[#0d1117] border-[#30363d]"
                      />
                    </td>
                    <td className="p-3">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </td>
                    <td className="p-3">personal-assistant</td>
                    <td className="p-3">9b707dc32fb3</td>
                    <td className="p-3">
                      <a href="#" className="text-blue-400">
                        kpmg/personal-assistant:8.1
                      </a>
                    </td>
                    <td className="p-3">
                      <RunInfo runs={345} />
                    </td>
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

            <div className="mt-2 text-right text-sm text-gray-400">
              Showing 7 items
            </div>
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
  );
}
