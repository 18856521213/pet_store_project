import React from 'react'

export default function LazyLoad(path) {
  const Conp = React.lazy(() => import(`../../views/${path}`))
  return (
    <React.Suspense fallback={<>加载中....</>}>
      <Conp></Conp>
    </React.Suspense>
  )
}
