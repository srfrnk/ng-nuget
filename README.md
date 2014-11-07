ng-nuget
========

AngularJS directive that enables creating 'nugets' - in-page reusable html sections within your template.

[![Build Status](https://travis-ci.org/srfrnk/ng-nuget.svg?branch=master)](https://travis-ci.org/srfrnk/ng-nuget)

When using angular I sometimes find myself duplicating html code.
E.g. when you have form fields of similar structure, buttons with similar functionality etc...

In some cases ng-repeat can be used by having them built dynamically from an array.
Sometimes however you don't want to use dynamic arrays or you want the code to be static for readablity.

For these I've built ng-nuget and the best way to explain is to show:

The following code:
```
<div ng-repeat="item in items" item-id="{{item.id}}">
		<span class="title">{{item.title}}</span>
		<span class="value">{{item.value}}</span>
</div>
<div item-id="null-item">
	<span class="title">None!</span>
	<span class="value">No Value Selected</span>
</div>
```

Can now be written so:
```
<nuget name="mynuget" data="*id,*title,*value">
  <div item-id="{{nugetData.id}}">
		<span class="title">{{nugetData.title}}</span>
		<span class="value">{{nugetData.value}}</span>
	</div>
</nuget>

<div ng-repeat="item in items" nuget="mynuget" id="item.id" title="item.title" value="item.value"></div>
<div nuget="mynuget" id="'null-item'" title="'None!'" value="'No Value Selected'"></div>
```

[And here's a live demo!](http://plnkr.co/edit/bb0Lp1?p=preview)
