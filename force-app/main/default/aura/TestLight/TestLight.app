<aura:application extends="force.slds">
    <aura:attribute name="val" type="string[]" default="['a','b','c','d','e','f']"></aura:attribute>
    <aura:attribute name="val1" type="String"></aura:attribute>
    <aura:attribute name="valDisplayTxt" type="String" ></aura:attribute>
	<div class="slds-grid slds-wrap">
     <aura:iteration items="['a','b','c','d','e','f']" var="ctr">
        <span class="slds-size_1-of-2">{!ctr + ' # '}</span>
        </aura:iteration>
    </div>
    <lightning:layout multipleRows="false">
         <aura:iteration items="{!v.val}" var="ctr">
              <lightning:layoutItem padding="around-large" size="6" smallDeviceSize="12" mediumDeviceSize="6">
                 {!ctr}
                 
              </lightning:layoutItem>   
         </aura:iteration>
    </lightning:layout>
    <br></br>
     {!v.val}
    <br></br>
    <div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-1">Name</label>
  <div class="slds-form-element__control">
    <input type="text" aura:id="Pat" placeholder="Text here..." value="{!v.val1}" class="slds-input" />
     <input type="text" aura:id="Pat"   class="slds-input" value="{!v.valDisplayTxt}"/>
      <button class="slds-button slds-button_destructive" onclick="{!c.doClick}">Show</button>
  </div>
</div>
    <br/>
    <span class="slds-avatar slds-avatar_x-small">
  <img src="/assets/images/avatar2.jpg" alt="meaningful text" />
</span>
 <br></br>
 <c:ContactList></c:ContactList>
    <br/>
    <span>-----Retrieve Data from Apex-----</span><br/>
    <c:RetriveDataFromApex></c:RetriveDataFromApex>
</aura:application>