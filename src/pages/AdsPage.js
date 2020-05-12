import React from 'react';
import AdList from '../components/AdList';
import Navbar from '../components/Navbar';
import '../scss/list/base.scss';

export default function AdsPage() {
  return (
    <div className="list-container">
      <AdList />
    </div>
  );
}
