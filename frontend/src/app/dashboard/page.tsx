"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import CountUp from "react-countup";
import { fetchCount, fetchRecent, fetchStats} from "../../services/api";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

interface ResponseItem {
  email: string;
  language: string;
  motivation: string;
  createdAt: string;
}

export default function DashboardPage() {
  const [count, setCount] = useState<number | null>(null);
  const [recent, setRecent] = useState<ResponseItem[]>([]);
  //const [stats, setStats] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  type Stat = {
    language: string;
    count: number;
  };
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countData, recentData, statsData] = await Promise.all([
          fetchCount(),
          fetchRecent(),
          fetchStats(),
        ]);
  
        setCount(countData.count);
        setStats(statsData.stats);
        setRecent(
          recentData.recent.map((item: any) => ({
            ...item,
            createdAt: item.created_at,
          }))
        );
      } catch (error) {
        console.error("Error al cargar datos del dashboard:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  

  return (
    <>
    <Navbar />
        <main className="max-w-5xl mx-auto p-6 mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

        {loading ? (
            <div className="flex justify-center items-center">
                <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
                </svg>
            </div>
            ) : (

            <>
            <section className="grid grid-cols-1 sm:grid-cols-12 gap-6 mb-10">
                <div className="bg-white md:col-span-2 shadow-md rounded-lg p-5 text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Total de respuestas</h2>
                    <p className="text-3xl font-bold text-blue-600 mt-2 md:text-5xl">
                        <CountUp end={count ?? 0} duration={1} />
                    </p>
                </div>
                <div className="bg-white md:col-span-5 shadow-md rounded-lg p-5 text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Por Lenguajes</h2>
                    <div className="w-full h-64 mt-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="language" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-white md:col-span-5 shadow-md rounded-lg p-5 text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Últimos registros</h2>
                    <p className="text-gray-500 text-sm mt-2">{recent.length} últimos</p>
                    <div className="overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            <th className="p-2">Email</th>
                            <th className="p-2">Idioma</th>
                            <th className="p-2">Fecha</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recent.map((item, index) => (
                            <tr key={index} className="border-t hover:bg-gray-50">
                            <td className="p-2">{item.email}</td>
                            <td className="p-2">{item.language}</td>
                            <td className="p-2">{new Date(item.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
                
            </section>

            
            </>
        )}
        </main>
    </>
  );
}


