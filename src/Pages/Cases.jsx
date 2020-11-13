import React from 'react';
import CaseModal from '../Components/CaseModal';
import Navigation from '../Components/Navigation';
import CaseDetail from '../Components/CaseDetail';
import CaseTable from '../Components/CaseTable';

function Cases() {
    return (
        <div>
            <Navigation />
            <CaseModal />
            <CaseTable />
        </div>
    );
}

export default Cases;