import React, { useContext, useEffect, useState } from 'react'

import { IStatistics } from 'src/models/statistiscs'
import { database } from 'src/firebase'

interface IStatisticsContext {
  statistics: IStatistics | null
}

export const StatisticsContex = React.createContext({} as IStatisticsContext)

export const useStatistics = () => useContext(StatisticsContex)

const StatisticsProvider: React.FC = ({ children }) => {
  const [statistics, setStatistics] = useState<IStatistics | null>(null)

  useEffect(() => {
    database
      .ref('applications')
      .on('value', (snap) => setStatistics(snap.toJSON() as IStatistics | null))
  }, [])

  return <StatisticsContex.Provider value={{ statistics }}>{children}</StatisticsContex.Provider>
}

export default StatisticsProvider
