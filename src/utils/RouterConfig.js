import React from 'react';
import {useRoutes} from 'react-router-dom';
import DataList from '../components/DataList';
import NewBook from '../components/NewBook';
import EditBook from '../components/EditBook';

export default function RouterConfig() {
  let routes = useRoutes([
    {path:'/', element:<DataList/>},
    {path:'/data-list', element:<DataList/>},
    {path:'/new-book', element:<NewBook/>},
    {path:'/edit-book/:id', element:<EditBook/>}
  ])

  return routes;
}
