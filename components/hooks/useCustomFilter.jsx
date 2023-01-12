/*
Notes:
- This hook will need to determine the type of filter and then return the appropriate filter function
- On first render, the filter function will be set to a default filter function (recent)
On page load the default will be recent
- Needs to be able to filter: All / Recent / Category / Tags

!! This is not the hook for the search bar, this is the hook for the filter dropdowns !!
!! When the search bar is used, this hook should default to (all) !!

Arguments:
- Mode


*/

import { useState, useEffect } from 'react';

function useCustomFilter() {


}
