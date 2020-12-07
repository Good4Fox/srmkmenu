import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
 const [activePanel, setActivePanel] = useState('home');
 const [fetchedUser, setUser] = useState(null);
 const [popout, setPopout] = useState(null);