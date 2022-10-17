import React from 'react'

export default function LazyLoad(dir, path) {
  const Conp = React.lazy(() => import(`../../${dir}/${path}`))
  return (
    <React.Suspense fallback={<>加载中....</>}>
      <Conp></Conp>
    </React.Suspense>
  )
}
