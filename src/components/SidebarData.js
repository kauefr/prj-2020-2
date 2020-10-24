import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as HiIcons from 'react-icons/hi';


export const SidebarData = [
    {
        title: 'Alunos', 
        path: '/alunos',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Turmas', 
        path: '/turmas',
        icon: <AiIcons.AiFillContacts />,
        cName: 'nav-text'
    },
    {
        title: 'Presença', 
        path: '/presenca',
        icon: <BiIcons.BiNotepad />,
        cName: 'nav-text'
    },
    {
        title: 'Atividades', 
        path: '/atividades',
        icon: <AiIcons.AiFillBook />,
        cName: 'nav-text'
    },
    {
        title: 'Relatorios', 
        path: '/relatorios',
        icon: <HiIcons.HiDocumentReport />,
        cName: 'nav-text'
    },
      
    
];