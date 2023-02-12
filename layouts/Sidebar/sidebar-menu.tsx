import React from 'react'

const SidebarMenu = () => {
  return (
    <div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" className="app-sidebar-menu-primary menu menu-column menu-rounded menu-sub-indention menu-state-bullet-primary px-6 mb-5">
         {/*begin:Menu item*/}
         <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
            {/*begin:Menu link*/}
            <span className="menu-link">
              <span className="menu-icon">
                <i className="fonticon-house fs-2" />
              </span>
              <span className="menu-title">Dashboards</span>
              <span className="menu-arrow" />
            </span>
            {/*end:Menu link*/}

            {/*begin:Menu sub*/}
            <div className="menu-sub menu-sub-accordion">

              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link active" href="../../demo39/dist/index.html">
                    <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Default</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}

              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="../../demo39/dist/dashboards/ecommerce.html">
                    <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">eCommerce</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}

              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="../../demo39/dist/dashboards/projects.html">
                    <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Projects</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}

              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="../../demo39/dist/dashboards/online-courses.html">
                    <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Online Courses</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}

              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="../../demo39/dist/dashboards/marketing.html">
                    <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Marketing</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}

              <div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_dashboards_collapse">
                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/bidding.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Bidding</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/pos.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">POS System</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/call-center.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Call Center</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/logistics.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Logistics</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/website-analytics.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Website Analytics</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/finance-performance.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Finance Performance</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/store-analytics.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Store Analytics</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/social.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Social</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/delivery.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Delivery</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/crypto.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Crypto</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/school.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">School</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/dashboards/podcast.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Podcast</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}

                {/*begin:Menu item*/}
                <div className="menu-item">
                    {/*begin:Menu link*/}
                    <a className="menu-link" href="../../demo39/dist/landing.html">
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Landing</span>
                    </a>
                    {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
              </div>

              <div className="menu-item">
                <div className="menu-content">
                    <a className="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show Less">
                    <span data-kt-toggle-text-target="true">Show 12 More</span>
                    {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                    <span className="svg-icon toggle-on svg-icon-2 me-0">
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                          <rect x="6.0104" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                    <span className="svg-icon toggle-off svg-icon-2 me-0">
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                          <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                          <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    </a>
                </div>
              </div>

            </div>
            {/*end:Menu sub*/}
         </div>
         {/*end:Menu item*/}

         {/*begin:Menu item*/}
         <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            {/*begin:Menu link*/}
            <span className="menu-link">
              <span className="menu-icon">
                <i className="fonticon-stats fs-2" />
              </span>
              <span className="menu-title">Pages</span>
              <span className="menu-arrow" />
            </span>
            {/*end:Menu link*/}

            {/*begin:Menu sub*/}
            <div className="menu-sub menu-sub-accordion">
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">User Profile</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/user-profile/overview.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Overview</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/user-profile/projects.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Projects</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/user-profile/campaigns.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Campaigns</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/user-profile/documents.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Documents</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/user-profile/followers.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Followers</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/user-profile/activity.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Activity</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}

            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Account</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/account/overview.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Overview</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/account/settings.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Settings</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/account/security.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Security</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/account/activity.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Activity</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/account/billing.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Billing</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/account/statements.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Statements</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/account/referrals.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Referrals</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/account/api-keys.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">API Keys</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/account/logs.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Logs</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Authentication</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Corporate Layout</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/sign-in.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sign-in</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/sign-up.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sign-up</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/two-steps.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Two-steps</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/reset-password.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Reset Password</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/corporate/new-password.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">New Password</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Overlay Layout</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/sign-in.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sign-in</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/sign-up.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sign-up</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/two-steps.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Two-steps</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/reset-password.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Reset Password</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/overlay/new-password.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">New Password</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Creative Layout</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/sign-in.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sign-in</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/sign-up.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sign-up</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/two-steps.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Two-steps</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/reset-password.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Reset Password</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/creative/new-password.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">New Password</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Fancy Layout</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/sign-in.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sign-in</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/sign-up.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sign-up</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/two-steps.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Two-steps</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/reset-password.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Reset Password</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/layouts/fancy/new-password.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">New Password</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Email Templates</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/email/welcome-message.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Welcome Message</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/email/reset-password.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Reset Password</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/email/subscription-confirmed.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Subscription Confirmed</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/email/card-declined.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Credit Card Declined</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/email/promo-1.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Promo 1</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/email/promo-2.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Promo 2</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/authentication/email/promo-3.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Promo 3</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/authentication/extended/multi-steps-sign-up.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Multi-steps Sign-up</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/authentication/extended/two-factor-auth.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Two Factor Auth</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/authentication/general/welcome.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Welcome Message</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/authentication/general/verify-email.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Verify Email</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/authentication/general/coming-soon.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Coming Soon</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/authentication/general/password-confirmation.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Password Confirmation</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/authentication/general/account-deactivated.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Account Deactivation</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/authentication/general/error-404.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Error 404</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/authentication/general/error-500.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Error 500</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Corporate</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/about.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">About</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/team.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Our Team</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/contact.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Contact Us</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/licenses.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Licenses</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/sitemap.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Sitemap</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Social</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/social/feeds.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Feeds</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/social/activity.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Activty</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/social/followers.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Followers</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/social/settings.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Settings</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Blog</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/blog/home.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Blog Home</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/blog/post.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Blog Post</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">FAQ</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/faq/classic.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">FAQ Classic</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/faq/extended.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">FAQ Extended</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Pricing</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/pricing/column.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Column Pricing</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/pricing/table.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Table Pricing</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Careers</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/careers/list.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Careers List</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/pages/careers/apply.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Careers Apply</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Widgets</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/widgets/lists.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Lists</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/widgets/statistics.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Statistics</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/widgets/charts.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Charts</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/widgets/mixed.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Mixed</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/widgets/tables.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Tables</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/widgets/feeds.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Feeds</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            </div>
            {/*end:Menu sub*/}
         </div>
         {/*end:Menu item*/}
         {/*begin:Menu item*/}
         <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            {/*begin:Menu link*/}
            <span className="menu-link">
            <span className="menu-icon">
               <i className="fonticon-app-store fs-2" />
            </span>
            <span className="menu-title">Apps</span>
            <span className="menu-arrow" />
            </span>
            {/*end:Menu link*/}
            {/*begin:Menu sub*/}
            <div className="menu-sub menu-sub-accordion">
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Projects</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/projects/list.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">My Projects</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/projects/project.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">View Project</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/projects/targets.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Targets</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/projects/budget.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Budget</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/projects/users.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Users</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/projects/files.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Files</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/projects/activity.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Activity</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/projects/settings.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Settings</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">eCommerce</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Catalog</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/products.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Products</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/categories.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Categories</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/add-product.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Add Product</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/edit-product.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Edit Product</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/add-category.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Add Category</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/catalog/edit-category.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Edit Category</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Sales</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/sales/listing.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Orders Listing</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/sales/details.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Order Details</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/sales/add-order.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Add Order</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/sales/edit-order.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Edit Order</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Customers</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/customers/listing.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Customer Listing</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/customers/details.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Customer Details</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Reports</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/view.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Products Viewed</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/sales.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sales</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/returns.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Returns</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/customer-orders.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Customer Orders</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/ecommerce/reports/shipping.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Shipping</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/ecommerce/settings.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Settings</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Contacts</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/contacts/getting-started.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Getting Started</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/contacts/add-contact.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Add Contact</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/contacts/edit-contact.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Edit Contact</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/contacts/view-contact.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">View Contact</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Support Center</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/support-center/overview.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Overview</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Tickets</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/support-center/tickets/list.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Tickets List</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/support-center/tickets/view.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Ticket</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Tutorials</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/support-center/tutorials/list.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Tutorials List</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/support-center/tutorials/post.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Tutorial Post</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/support-center/faq.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">FAQ</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/support-center/licenses.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Licenses</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/support-center/contact.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Contact Us</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">User Management</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Users</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/user-management/users/list.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Users List</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/user-management/users/view.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View User</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Roles</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/user-management/roles/list.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Roles List</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/user-management/roles/view.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Role</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/user-management/permissions.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Permissions</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Customers</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/customers/getting-started.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Getting Started</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/customers/list.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Customer Listing</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/customers/view.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Customer Details</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Subscription</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/subscriptions/getting-started.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Getting Started</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/subscriptions/list.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Subscription List</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/subscriptions/add.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Add Subscription</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/subscriptions/view.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">View Subscription</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Invoice Manager</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">View Invoices</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/invoices/view/invoice-1.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Invoice 1</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/invoices/view/invoice-2.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Invoice 2</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/apps/invoices/view/invoice-3.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Invoice 3</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/invoices/create.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Create Invoice</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">File Manager</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/file-manager/folders.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Folders</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/file-manager/files.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Files</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/file-manager/blank.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Blank Directory</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/file-manager/settings.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Settings</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Inbox</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/inbox/listing.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Messages</span>
                     <span className="menu-badge">
                        <span className="badge badge-success">3</span>
                     </span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/inbox/compose.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Compose</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/inbox/reply.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">View &amp; Reply</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Chat</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/chat/private.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Private Chat</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/chat/group.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Group Chat</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/apps/chat/drawer.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Drawer Chat</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div className="menu-item">
               {/*begin:Menu link*/}
               <a className="menu-link" href="../../demo39/dist/apps/calendar.html">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Calendar</span>
               </a>
               {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
            </div>
            {/*end:Menu sub*/}
         </div>
         {/*end:Menu item*/}
         {/*begin:Menu item*/}
         <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            {/*begin:Menu link*/}
            <span className="menu-link">
            <span className="menu-icon">
               <i className="fonticon-image fs-2" />
            </span>
            <span className="menu-title">Utilities</span>
            <span className="menu-arrow" />
            </span>
            {/*end:Menu link*/}
            {/*begin:Menu sub*/}
            <div className="menu-sub menu-sub-accordion">
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Modals</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">General</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/general/invite-friends.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Invite Friends</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/general/view-users.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Users</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/general/select-users.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Select Users</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/general/upgrade-plan.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Upgrade Plan</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/general/share-earn.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Share &amp; Earn</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Forms</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/forms/new-target.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">New Target</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/forms/new-card.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">New Card</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/forms/new-address.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">New Address</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/forms/create-api-key.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Create API Key</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/forms/bidding.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Bidding</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Wizards</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/create-app.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Create App</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/create-campaign.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Create Campaign</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/create-account.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Create Business Acc</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/create-project.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Create Project</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/top-up-wallet.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Top Up Wallet</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/offer-a-deal.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Offer a Deal</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/two-factor-authentication.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Two Factor Auth</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Search</span>
                     <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/search/users.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Users</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                     {/*begin:Menu item*/}
                     <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo39/dist/utilities/modals/search/select-location.html">
                        <span className="menu-bullet">
                           <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Select Location</span>
                        </a>
                        {/*end:Menu link*/}
                     </div>
                     {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Wizards</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/wizards/horizontal.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Horizontal</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/wizards/vertical.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Vertical</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/wizards/two-factor-authentication.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Two Factor Auth</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/wizards/create-app.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Create App</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/wizards/create-campaign.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Create Campaign</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/wizards/create-account.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Create Account</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/wizards/create-project.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Create Project</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/modals/wizards/top-up-wallet.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Top Up Wallet</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/wizards/offer-a-deal.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Offer a Deal</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
               {/*begin:Menu link*/}
               <span className="menu-link">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Search</span>
                  <span className="menu-arrow" />
               </span>
               {/*end:Menu link*/}
               {/*begin:Menu sub*/}
               <div className="menu-sub menu-sub-accordion menu-active-bg">
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/search/horizontal.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Horizontal</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/search/vertical.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Vertical</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/search/users.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Users</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
                  {/*begin:Menu item*/}
                  <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo39/dist/utilities/search/select-location.html">
                     <span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                     </span>
                     <span className="menu-title">Location</span>
                  </a>
                  {/*end:Menu link*/}
                  </div>
                  {/*end:Menu item*/}
               </div>
               {/*end:Menu sub*/}
            </div>
            {/*end:Menu item*/}
            </div>
            {/*end:Menu sub*/}
         </div>
         {/*end:Menu item*/}
         {/*begin:Menu item*/}
         <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            {/*begin:Menu link*/}
            <span className="menu-link">
            <span className="menu-icon">
               <i className="fonticon-setting fs-2" />
            </span>
            <span className="menu-title">Help</span>
            <span className="menu-arrow" />
            </span>
            {/*end:Menu link*/}
            {/*begin:Menu sub*/}
            <div className="menu-sub menu-sub-accordion">
            {/*begin:Menu item*/}
            <div className="menu-item">
               {/*begin:Menu link*/}
               <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Components</span>
               </a>
               {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div className="menu-item">
               {/*begin:Menu link*/}
               <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Documentation</span>
               </a>
               {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div className="menu-item">
               {/*begin:Menu link*/}
               <a className="menu-link" href="https://preview.keenthemes.com/metronic8/demo39/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Layout Builder</span>
               </a>
               {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div className="menu-item">
               {/*begin:Menu link*/}
               <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
                  <span className="menu-bullet">
                  <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Changelog v8.1.7</span>
               </a>
               {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
            </div>
            {/*end:Menu sub*/}
         </div>
         {/*end:Menu item*/}
      </div>
  )
}

export default SidebarMenu