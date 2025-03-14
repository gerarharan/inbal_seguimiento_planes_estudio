'use client';

import { CircleHelp, FileText, Flag, TrendingUp, UsersRound } from "lucide-react";

export default function Analytics(){
  return <section className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <div className="p-2">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="tracking-tight text-sm font-medium me-3">
                    Registros del mes
                  </div>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="p-6 pt-0">
                  <div className="text-3xl font-bold text-center">35</div>
                  <p className="text-xs mt-2 text-center text-blue-400 dark:text-blue-300">
                    +5 nuevos planes, 14%
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="tracking-tight text-sm font-medium me-3">
                    Planes registrados
                  </div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="p-6 pt-0">
                  <div className="text-3xl font-bold text-center">53</div>
                  <p className="text-xs mt-2 text-amber-500 text-center">
                    Planes confirmados por la escuela
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="tracking-tight text-sm font-medium me-3">
                    Comunidad
                  </div>
                  <UsersRound className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="p-6 pt-0 grid grid-cols-2 ">
                  <div className="grid sm:grid-cols-1">
                    <div className="text-3xl font-bold text-center">32</div>
                    <p className="text-xs mt-2 text-muted-foreground text-center">
                      Administradores
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-1">
                    <div className="text-3xl font-bold text-center">546</div>
                    <p className="text-xs mt-2 text-muted-foreground text-center">
                      Docentes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="tracking-tight text-sm font-medium me-3">
                    Incidentes reportados
                  </div>
                  <Flag className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="p-6 pt-0">
                  <div className="text-3xl font-bold text-center">7</div>
                  <p className="text-xs mt-2 text-red-500 text-center">
                    Planes confirmados por la escuela
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
}