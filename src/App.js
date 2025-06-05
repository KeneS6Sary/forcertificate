import logo from './logo.svg';
import './App.css';

function App() {

  return (
      <div className="cab_header_center">
          <div className="title_text_block">

              <div ng-if="$ctrl.byArray">
                  <div className="top_text">


                      <div className="menu" ng-if="$ctrl.crumbType == $ctrl.crumbTypeEnums.Button">
                          <a href="//sso.satbayev.university" className="menu_link">
                              <div className="menu_button">
                                  <i className="icon-home"></i>
                              </div>
                          </a>

                          <div className="menu_button" ng-repeat="crumb in $ctrl.breadCrumbs"
                               ng-click="$ctrl.goTo(crumb)">

                              <i className=" orders_menu"></i>
                              <p ng-if="$ctrl.breadCrumbs.length < 3 || $last">Страница студента</p>
                              <div className="next_button">
                                  <i className="icon-breadcrumbs_arrow"> </i>
                              </div>
                          </div>

                          <div className="menu_button" ng-repeat="crumb in $ctrl.breadCrumbs"
                               ng-click="$ctrl.goTo(crumb)">

                              <i className=" orders_menu"></i>
                              <p ng-if="$ctrl.breadCrumbs.length < 3 || $last">Справки</p>
                              <div className="next_button">
                                  <i className="icon-breadcrumbs_arrow"> </i>
                              </div>
                          </div>

                      </div>

                  </div>


              </div>


          </div>
          <div className="operator_block">
              <div className="visually_impaired">
                  <a href="#" className="bvi-open" style={{}}><i className="icon-eye"></i>&nbsp;&nbsp; Версия для
                      слабовидящих</a>
              </div>
              <div className="oper_name_block">
                  <p>Еренгалиев А.М.</p>
                  <p className="stat">Бакалавриат</p>

              </div>
              <div className="oper_set_block">

                  <div className="img default-img" ng-if="$ctrl.imageSrc &amp;&amp; $ctrl.showImage"
                       ng-class="{'default-img': !$ctrl.hasImage}">
                      <img ng-src="//stud.satbayev.university/images/icons/new-icons/default-avatar.png"
                           src="//stud.satbayev.university/images/icons/new-icons/default-avatar.png"
                           className="bvi-img"/>

                  </div>

                  <div className="exit_block" ng-click="$ctrl.logOut()">
                      <i className="icon-enter"></i>
                      <p>Выход</p>
                  </div>
                  <div className="lang_block">
                      <button ng-click="$ctrl.changeLanguage('kz')" className="button oper_button"
                              ng-class="{active: $ctrl.isActiveLanguage('kz')}">
                          Қаз
                      </button>
                      <button ng-click="$ctrl.changeLanguage('ru')" className="button oper_button active"
                              ng-class="{active: $ctrl.isActiveLanguage('ru')}">
                          Рус
                      </button>
                      <button ng-click="$ctrl.changeLanguage('en')" className="button oper_button"
                              ng-class="{active: $ctrl.isActiveLanguage('en')}">
                          Eng
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
