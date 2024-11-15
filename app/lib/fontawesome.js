// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch,
    faSignIn,
    faBars,
    faGlobe,
    faPenToSquare,
    faRss,
    faEnvelope,
    faChevronRight, faFileText, faUser, faPencil, faTags
} from '@fortawesome/free-solid-svg-icons';

import { faClock, faComments } from "@fortawesome/free-regular-svg-icons";

import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(
    fab,
    faSearch,
    faSignIn,
    faBars,
    faGlobe,
    faPenToSquare,
    faRss,
    faEnvelope,
    faChevronRight, faFileText, faUser, faPencil, faTags, faClock, faComments
);